// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            links: {
                executionResult:
                    "/gdc/app/projects/storybook/executionResults/2f36084449570afd9e9fae58e16fc60f?dimensions=2",
            },
            dimensions: [
                {
                    headers: [
                        {
                            attributeHeader: {
                                identifier: "5.df",
                                uri: "/gdc/md/" + projectId + "/obj/5.df",
                                name: "Popularity",
                                localIdentifier: "a2",
                                formOf: {
                                    uri: "/gdc/md/" + projectId + "/obj/5",
                                    identifier: "5",
                                    name: "Popularity",
                                },
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                identifier: "4.df",
                                uri: "/gdc/md/" + projectId + "/obj/4.df",
                                name: "Colours",
                                localIdentifier: "a1",
                                formOf: {
                                    uri: "/gdc/md/" + projectId + "/obj/4",
                                    identifier: "4",
                                    name: "Colours",
                                },
                            },
                        },
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            identifier: "9",
                                            uri: "/gdc/md/" + projectId + "/obj/9",
                                            localIdentifier: "m4",
                                            format: "#,##0.00",
                                            name: "Saved null",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    };
};
