import os
import re

DOCS_DIR = "docs"
OUTPUT = os.path.join(DOCS_DIR, "print_all.md")

SITE_PREFIX = "/greamarchitects/CityPortraits"

HEADER = """---
hide:
  - navigation
  - toc
---

# CityPortraits – Full Document
"""

EXCLUDED_FILES = {"print_all.md"}
EXCLUDED_DIRS = {"assets", "javascripts", "stylesheets"}

def remove_frontmatter(content):
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            return parts[2].lstrip()
    return content

def remove_first_h1(content):
    return re.sub(r"^# .*\n", "", content, count=1, flags=re.MULTILINE)

def page_break():
    return "\n\n<div class='page-break'></div>\n\n"

def normalize_path(path):
    return path.replace("\\", "/")

def slugify_heading(text):
    text = text.lower()
    text = text.replace("→", " ")
    text = text.replace("_", " ")
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"\s+", "-", text.strip())
    return text

def normalize_asset_paths(content):
    # HTML src="../../../assets/..."
    content = re.sub(
        r'src=["\'](?:\.\./)+assets/',
        f'src="{SITE_PREFIX}/assets/',
        content
    )

    # HTML src="assets/..."
    content = re.sub(
        r'src=["\']assets/',
        f'src="{SITE_PREFIX}/assets/',
        content
    )

    # Markdown ![](../../../assets/...)
    content = re.sub(
        r'(\!\[[^\]]*\]\()((?:\.\./)+assets/)',
        rf'\1{SITE_PREFIX}/assets/',
        content
    )

    # Markdown ![](assets/...)
    content = re.sub(
        r'(\!\[[^\]]*\]\()(assets/)',
        rf'\1{SITE_PREFIX}/assets/',
        content
    )

    return content

def collect_all_md_files():
    md_files = []

    for root, dirs, files in os.walk(DOCS_DIR):
        dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]

        for file in files:
            if not file.endswith(".md"):
                continue
            if file in EXCLUDED_FILES:
                continue

            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, DOCS_DIR)
            md_files.append(normalize_path(rel_path))

    return md_files

def sort_key(path):
    parts = path.split("/")

    top_order = {
        "index.md": 0,
        "methodology": 1,
        "model": 2,
        "case_studies": 3,
        "about": 4,
    }

    first = parts[0]
    group = top_order.get(first, 99)

    filename = parts[-1]
    index_priority = 0 if filename == "index.md" else 1

    return (group, parts[:-1], index_priority, filename)

def format_title(path):
    parts = path.replace(".md", "").split("/")
    return " → ".join(
        p.replace("_", " ").title()
        for p in parts
    )

def build_anchor_map(files):
    """
    Map original markdown paths to the generated print_all heading anchors.
    Example:
      methodology/contextual_analysis/actor/index.md
      -> #methodology-contextual-analysis-actor-index
    """
    anchor_map = {}

    for path in files:
        title = format_title(path)
        anchor = "#" + slugify_heading(title)
        anchor_map[path] = anchor

    return anchor_map

def resolve_relative_link(current_file, target_link):
    """
    Resolve a markdown relative link as if it were written from current_file.
    """
    current_dir = os.path.dirname(current_file)
    joined = os.path.normpath(os.path.join(current_dir, target_link))
    return normalize_path(joined)

def rewrite_internal_links(content, current_file, anchor_map):
    """
    Rewrite markdown links from relative .md paths to print_all anchors.
    """

    def repl(match):
        text = match.group(1)
        target = match.group(2)

        # Skip external links, anchors, mailto, assets, absolute URLs
        if (
            target.startswith("http://")
            or target.startswith("https://")
            or target.startswith("#")
            or target.startswith("mailto:")
            or target.startswith("/")
            or target.startswith(SITE_PREFIX)
            or target.startswith("assets/")
        ):
            return match.group(0)

        # Split optional anchor
        if "#" in target:
            file_part, fragment = target.split("#", 1)
        else:
            file_part, fragment = target, None

        # Only rewrite markdown file links
        if not file_part.endswith(".md"):
            return match.group(0)

        resolved = resolve_relative_link(current_file, file_part)

        if resolved in anchor_map:
            new_target = anchor_map[resolved]
            if fragment:
                new_target += "-" + slugify_heading(fragment)
            return f"[{text}]({new_target})"

        # fallback: leave unchanged
        return match.group(0)

    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)', repl, content)

def rewrite_html_links(content, current_file, anchor_map):
    """
    Rewrite raw HTML href links from relative .md paths to print_all anchors.
    Example:
      <a href="methodology/index.md">Methodology</a>
      -> <a href="#methodology-index">Methodology</a>
    """

    def repl(match):
        quote = match.group(1)
        target = match.group(2)

        # Skip external, anchors, mailto, absolute links, assets
        if (
            target.startswith("http://")
            or target.startswith("https://")
            or target.startswith("#")
            or target.startswith("mailto:")
            or target.startswith("/")
            or target.startswith(SITE_PREFIX)
            or target.startswith("assets/")
        ):
            return match.group(0)

        # split optional fragment
        if "#" in target:
            file_part, fragment = target.split("#", 1)
        else:
            file_part, fragment = target, None

        # only rewrite markdown links
        if not file_part.endswith(".md"):
            return match.group(0)

        resolved = resolve_relative_link(current_file, file_part)

        if resolved in anchor_map:
            new_target = anchor_map[resolved]
            if fragment:
                new_target += "-" + slugify_heading(fragment)
            return f'href={quote}{new_target}{quote}'

        return match.group(0)

    return re.sub(r'href=(["\'])([^"\']+)\1', repl, content)

files = sorted(collect_all_md_files(), key=sort_key)
anchor_map = build_anchor_map(files)

with open(OUTPUT, "w", encoding="utf-8") as out:
    out.write(HEADER)

    for i, rel_path in enumerate(files):
        full_path = os.path.join(DOCS_DIR, rel_path)

        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()

        content = remove_frontmatter(content)
        content = remove_first_h1(content).strip()
        content = normalize_asset_paths(content)
        content = rewrite_internal_links(content, rel_path, anchor_map)
        content = rewrite_html_links(content, rel_path, anchor_map) 

        title = format_title(rel_path)

        out.write(f"\n\n## {title}\n\n")
        out.write(content)

        if i < len(files) - 1:
            out.write(page_break())

print(f"✅ print_all.md generated with {len(files)} markdown files.")
for f in files:
    print(" -", f)