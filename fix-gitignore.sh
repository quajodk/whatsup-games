# Remove everything from the repository cache.
git rm -r --cached .
# Re add everything
git add .
# Commit the fix
git commit -m 'fix .gitignore'
