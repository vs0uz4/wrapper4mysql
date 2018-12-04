# wrapper4mysql

Manually generated.

[![Download][download-badge]][download-url]
[![LatestCommits][latestCommit-badge]][latestCommit-url]
[![LatestReleases][latestRelease-badge]][latestRelease-url]
[![Stars][stars-badge]][stars-url]
[![Forks][forks-badge]][forks-url]
[![Issues][issues-badge]][issues-url]
[![ClosedIssues][closedIssues-badge]][closedIssues-url]
![CodeSize][codeSize-badge]
![RepoSize][repoSize-badge]
[![License][license-badge]][license-url]

> A Sample of Wrapper for mysql Package.

# Dependencies
### for run
- dotenv;
- faker;
- mysql;
- winston;
- nodemon.

### for develop (optional)
- eslint;
- prettier;
- standard;
- eslint-config-prettier;
- eslint-config-standard;
- eslint-plugin-import;
- eslint-plugin-node;
- eslint-plugin-prettier;
- eslint-plugin-promise;
- eslint-plugin-standard.


# Development

- Clone the repo

```bash
$ git clone https://github.com/vs0uz4/wrapper4mysql2.git
```

- Install dependencies

```bash
$ npm install
```

- Run scripts

| Action                 | Usage          |
| ---------------------- | -------------- |
| Start development mode | `npm start`    |
| Lint code              | `npm run lint` |

- Environment variables

Create an `.env` file in the root directory.

```yml
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=wrapper
DB_USERNAME=wrapper
DB_PASSWORD=wrapper
```

# Docker

- Start container

```bash
$ docker-compose up
```

- Stop container

```bash
$ docker-compose down
```

# Author

[Vitor S Rodrigues](https://github.com/vs0uz4)

# License

[MIT](https://github.com/vs0uz4/wrapper4mysql2/blob/master/LICENSE)

# Credits
The organization, the development environment configuration files and the `README` were inspired/based project [express-jwt](https://github.com/robertoachar/express-jwt) (Roberto Achar)


[forks-badge]:https://img.shields.io/github/forks/vs0uz4/wrapper4mysql2.svg
[forks-url]: https://github.com/vs0uz4/wrapper4mysql2/network/members

[stars-badge]:https://img.shields.io/github/stars/vs0uz4/wrapper4mysql2.svg
[stars-url]: https://github.com/vs0uz4/wrapper4mysql2/stargazers

[download-badge]: https://img.shields.io/github/downloads/vs0uz4/wrapper4mysql2/total.svg
[download-url]: https://github.com/vs0uz4/wrapper4mysql2/archive/master.zip

[latestRelease-badge]: https://img.shields.io/github/release/vs0uz4/wrapper4mysql2.svg?label=latest%20release
[latestRelease-url]: https://github.com/vs0uz4/wrapper4mysql2/releases/latest

[latestCommit-badge]: https://img.shields.io/github/last-commit/vs0uz4/wrapper4mysql2.svg
[latestCommit-url]: https://github.com/vs0uz4/wrapper4mysql2/commits/

[issues-badge]: https://img.shields.io/github/issues/vs0uz4/wrapper4mysql2.svg
[issues-url]: https://github.com/vs0uz4/wrapper4mysql2/issues

[closedIssues-badge]: https://img.shields.io/github/issues-closed/vs0uz4/wrapper4mysql2.svg
[closedIssues-url]: https://github.com/vs0uz4/wrapper4mysql2/issues?q=is%3Aissue+is%3Aclosed

[codeSize-badge]: https://img.shields.io/github/languages/code-size/vs0uz4/wrapper4mysql2.svg

[repoSize-badge]: https://img.shields.io/github/repo-size/vs0uz4/wrapper4mysql2.svg

[license-badge]: https://img.shields.io/github/license/vs0uz4/wrapper4mysql2.svg
[license-url]: https://opensource.org/licenses/MIT
