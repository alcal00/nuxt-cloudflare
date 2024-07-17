# olap

Module to process embeded OLAP data files like duckdb or sqlite.


## info


Sample info block :
```
- Fichier position.duckdb
    - fichier de 6 Mo
    - 656 765 lignes
    - 8 676 544 valeurs
    - 4 tables 
        - table phys
            - primary key : X+Y
            - column X
            - column Y 
            - column Z 
        - table future
        - table pl
        - table pos
```

## value

Target value definition :

- value field : table.field



Sample check block :
```
- 693 k€ value S24
    - 
```


## diff

Target value definition :

- value field : table.field



Sample check block :
```
- 154 k€ value diff S24-S23
    - 693 k€ value S24
    - 539 k€ value S23

```

## TODO

* use a common format (duckdb), convert all other formats to this one