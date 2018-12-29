install:
	yarn

lint:
	npx tslint -p . -c tslint.json

type-check:
	npx tsc --noEmit

watch-types:
	npx tsc --noEmit --watch

test:
	npx jest

watch-tests:
	npx jest --watch --verbose false

test-coverage:
	npx jest --coverage
