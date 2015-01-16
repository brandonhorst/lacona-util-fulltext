lacona-util-fulltext
====================
[![Travis](https://img.shields.io/travis/lacona/lacona-util-fulltext.svg?style=flat)](https://travis-ci.org/lacona/lacona-util-fulltext)
[![Coverage Status](https://img.shields.io/coveralls/lacona/lacona-util-fulltext.svg?style=flat)](https://coveralls.io/r/lacona/lacona-util-fulltext)

Take lacona output and generate a simple string.

Useful for passing to lacona-addon-* functions.

Given this input:

```json
{
    "match": [
        {"string": "a"},
        {"string": " "}
    ],
    "suggestion": {
        "charactersComplete": 0,
        "words": [
            {"string": "b"}
        ]
    },
    "completion": [
        {"string": " "},
        {"string": "c"}
    ]
}
```

Generate this output:

```json
"a b c"
```
