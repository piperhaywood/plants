const { PASSWORD } = process.env

exports.handler = async (event, context) => {
  const submission = event.queryStringParameters.submission

  if (submission === PASSWORD) {
    return {
      statusCode: 200,
      body: `authenticated with password: ${submission}`
    }
  } else {
    return {
      statusCode: 200,
      body: `declined with password: ${submission}`
    }
  }
}
