package yuhaiin_github_io

import "embed"

//go:embed 404 _next _not-found docs 404.html index.html index.txt __next.__PAGE__.txt __next._full.txt __next._index.txt __next._tree.txt
var Content embed.FS
