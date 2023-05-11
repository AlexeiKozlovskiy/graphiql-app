interface GraphiQLResponseType {
  result: string;
}

function GraphiQLResponse({ result }: GraphiQLResponseType) {
  return (
    <section className="graphiQLPage__response">
      {result ? (
        <pre className="graphiQLPage__response-text">{result}</pre>
      ) : (
        <div className="graphiQLPage__response-title">response</div>
      )}
    </section>
  );
}

export default GraphiQLResponse;
