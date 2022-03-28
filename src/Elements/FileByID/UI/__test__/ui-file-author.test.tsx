import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import MockAdapter from "axios-mock-adapter";
import api from "../../../../DataLayer/TransportLayer/config";
import {getFileByID_mocked_data} from "../../../../DataLayer/TransportLayer/__mocks__/file.resolver";
import FileByIdStore from "../../Store/file-by-id-store";
import UIFileAuthor from "../ui-file-author";

describe("file author", () => {
    let storeObject: FileByIdStore
    let authorTestComponent: ReactWrapper<typeof UIFileAuthor> | null = null
    beforeAll(() => {
        const server = new MockAdapter(api);
        server.onGet('file/2').reply(200, getFileByID_mocked_data)
        storeObject = new FileByIdStore("2")
        authorTestComponent = mount(<UIFileAuthor fileStore={storeObject}/>);
    })
    test("test file author after load data", () => {
        expect(authorTestComponent).not.toBeNull()
        if (authorTestComponent) {
            expect(
                authorTestComponent
                    .text()
                    .includes(getFileByID_mocked_data.fileEntity.user.email)
            )

        }
    })

    test("2 test file author", () => {
        const secondTestEmail = "secondTestUser@mail.com"
        if (storeObject.fileData?.user) {
            storeObject.setFileData(
                {
                    ...storeObject.fileData,
                    user:
                        {
                            email: secondTestEmail,
                            id: "2"
                        }
                }
            )
        }
        authorTestComponent?.update()
        if (authorTestComponent) {
            expect(
                authorTestComponent
                    .text()
                    .includes(secondTestEmail)
            )
        }
    })

})