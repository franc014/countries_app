import App, { Container } from "next/app";
import Layout from "../components/Page";
import AppConfigProvider from "../components/context/AppConfigProvider";

class CountriesApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AppConfigProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppConfigProvider>
      </Container>
    );
  }
}

export default CountriesApp;
