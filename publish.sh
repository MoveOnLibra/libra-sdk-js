npm run test:unit
if [ $? -eq 0 ]
then
  npm run build
  npm publish
  exit 0
else
  echo "Testing failed, abort." >&2
  exit 1
fi

