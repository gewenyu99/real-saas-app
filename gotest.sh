#!/bin/bash

ls
cd go/src
gotestsum --rerun-fails=0 --junitfile gotestsum_test.xml