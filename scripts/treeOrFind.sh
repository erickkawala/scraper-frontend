#!/bin/bash

# Folders to ignore
IGNORE_DIRS='node_modules|.git|dist|public|.next'

# Check for --folders-only flag
FOLDERS_ONLY=false
if [[ "$1" == "--folders-only" ]]; then
  FOLDERS_ONLY=true
fi

if command -v tree >/dev/null 2>&1; then
  if [ "$FOLDERS_ONLY" = true ]; then
    tree -d -I "$IGNORE_DIRS"
  else
    tree -I "$IGNORE_DIRS"
  fi
else
  echo " 'tree' not found, using fallback with 'find'..."

  if [ "$FOLDERS_ONLY" = true ]; then
    find . \( \
      -path './node_modules' -o \
      -path './.git' -o \
      -path './dist' -o \
      -path './public' -o \
      -path './.next' \
    \) -prune -o -type d -print
  else
    find . \( \
      -path './node_modules' -o \
      -path './.git' -o \
      -path './dist' -o \
      -path './public' -o \
      -path './.next' \
    \) -prune -o -print
  fi
fi
