import WebpackDevServer from "webpack-dev-server";
declare module "webpack" {
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}
