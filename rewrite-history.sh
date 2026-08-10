#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

git checkout --orphan clean-main
git add -A

# Keep helper script and build artifacts out of the commit
git rm -r --cached .next node_modules out next-env.d.ts rewrite-history.sh 2>/dev/null || true

TREE="$(git write-tree)"
echo "TREE=$TREE"

COMMIT="$(git commit-tree "$TREE" -m "Launch personal portofolio site")"
echo "COMMIT=$COMMIT"

# Verify no Cursor trailer slipped in
if git log -1 --format=%B "$COMMIT" | grep -qi "Co-authored-by: Cursor"; then
  echo "ERROR: Cursor trailer still present" >&2
  exit 1
fi

git reset --hard "$COMMIT"
echo "----- commit message -----"
git log -1 --format=full

git branch -D main
git branch -m main
git push --force-with-lease origin main

echo "----- final history -----"
git log --format=full
git status -sb
