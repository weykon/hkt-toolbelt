rm -rf ./dist/
npx tsc --project tsconfig.build.json
cp -r ./pkg/* ./dist/
touch ./dist/index.js
