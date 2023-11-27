#!/bin/bash

#running unit test coverage
yarn test --coverage

#copying lcov.info file which has coverage to separet folder
cp /Users/nainadixit/eversports/tools/jest/coverage/lcov.info /Users/nainadixit/eversports/tools/jest/final-output-coverage

#renaming lcov.info file
mv lcov.info lcov_unit.info

#running integration test coverage
yarn test:integration --coverage --maxWorkers=2

#copying lcov.info file which has coverage to separet folder
cp /Users/nainadixit/eversports/tools/jest/coverage/lcov.info /Users/nainadixit/eversports/tools/jest/final-output-coverage

#renaming lcov.info file
mv lcov.info lcov_init.info

#merge unit and integration test coverage to one file merge_lcov.info
lcov --add-tracefile tools/jest/final-output-coverage/lcov_unit.info --add-tracefile tools/jest/final-output-coverage/lcov_init.info --output-file tools/jest/final-output-coverage/merge_lcov.info

#merge_lcov.info to html report in CLI
