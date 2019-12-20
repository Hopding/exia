<h1 align="center">
<img alt="exia" height="300" src="assets/exia.svg">
</h1>

<div align="center">
  <h3><code>exia</code></h3>
</div>
<div align="center">
  A handy tool for database and secret management
</div>

# Usage

```
exia

A handy tool for database and secret management

Commands:
  exia                A handy tool for database and secret management  [default]
  exia db [name]      Connect to a PostgreSQL database
  exia secret [name]  View a secret

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

# Installation

```
git clone git@github.com:Hopding/exia.git
yarn install
yarn link
exia
```

# Prerequisites

### Install `pgcli`

```
brew install pgcli
```

### Install `db2cli`

- Follow the [download instructions](https://www.ibm.com/support/knowledgecenter/en/SSEPGG_9.7.0/com.ibm.swg.im.dbclient.install.doc/doc/t0007317.html) (note that you will likely need to create an IBM account to download the DMG file).
- Open the DMG file and follow the instructions in the `Readme.txt` file.
- Add the following line to your `~/.bash_profile`:
  ```
  . /Applications/dsdriver/db2profile
  ```
- Run `db2cli` to ensure everything is working correctly.
