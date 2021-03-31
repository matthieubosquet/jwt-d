import yargs from 'yargs'

export class CliRunner {
  public static run(argv: string[] = []): void {

    const { argv: params } = yargs(argv.slice(2))
      .usage('node ./dist/index.js [args]')
      .options({
        jwt: { type: 'string', alias: 'j', default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
      })
      .help();

    console.log(JSON.parse(
      `{
        "header": ${Buffer.from(params.jwt.split('.')[0], 'base64').toString()},
        "payload": ${Buffer.from(params.jwt.split('.')[1], 'base64').toString()},
        "signature": "${params.jwt.split('.')[2]}"
      }`));
  }
}
