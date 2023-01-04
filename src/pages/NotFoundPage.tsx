import React from "react";
import Text from "../components/UI/Text";
import Page from "../components/UI/Page";

const NotFoundPage = () => {
  return (
    <Page id={"notFoundPage"}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text size={34}>Error 404</Text>
        <Text size={34}>Page Not Found</Text>
      </div>
    </Page>
  );
};

export default NotFoundPage;
