lacona-util-fulltext
====================

Take lacona output and generate a simple string.

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
