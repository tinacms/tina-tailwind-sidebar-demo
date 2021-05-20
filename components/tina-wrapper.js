import React from "react";
import { TinaCMS } from "tinacms";
import {
  TinaCloudAuthWall,
  useDocumentCreatorPlugin,
} from "tina-graphql-gateway";
import { createClient } from "../utils/";
import { useGraphqlForms } from "tina-graphql-gateway";

const TinaWrapper = (props) => {
  const cms = React.useMemo(() => {
    return new TinaCMS({
      apis: {
        tina: createClient(),
      },
      enabled: true,
      sidebar: true,
    });
  }, []);

  /** Disables the TinaCMS "Media Manager" */

  return (
    <TinaCloudAuthWall cms={cms}>
      <Inner {...props} />
    </TinaCloudAuthWall>
  );
};

const Inner = (props) => {
  const [payload, isLoading] = useGraphqlForms({
    query: (gql) => gql(props.query),
    variables: props.variables || {},
  });
  useDocumentCreatorPlugin();
  return (
    <>
      {isLoading ? (
        <>
          <div>loading</div>
          <div
            style={{
              pointerEvents: "none",
            }}
          >
            {props.children(props)}
          </div>
        </>
      ) : (
        // pass the new edit state data to the child
        props.children({ ...props, pageProps: payload })
      )}
    </>
  );
};

export default TinaWrapper;
