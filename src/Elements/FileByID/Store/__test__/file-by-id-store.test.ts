import MockAdapter from "axios-mock-adapter";
import api from "../../../../DataLayer/TransportLayer/config";
import {getFileByID_mocked_data} from "../../../../DataLayer/TransportLayer/__mocks__/file.resolver";
import FileByIdStore from "../file-by-id-store";

jest.mock("../../../../DataLayer/TransportLayer/__mocks__/file.resolver");

describe('file by id sore', () => {
    let storeObject: FileByIdStore

    beforeAll(() => {
        const server = new MockAdapter(api);
        server.onGet('file/2').reply(200, getFileByID_mocked_data)
        storeObject = new FileByIdStore("2")
    });

    test('is loading is not true', () => {
        expect(storeObject.loading).not.toBe(true)
    })

    test('data has been saved correctly', () => {
        expect(storeObject.fileData).toStrictEqual(getFileByID_mocked_data.fileEntity)
    })

    test("check that destination is right", () => {
        expect(storeObject.fileData?.destination).toBe(getFileByID_mocked_data.fileEntity.destination)
    })

    test("short mimetype '/' test", () => {
        expect(storeObject.shortMimetype).toBe("jpeg")
    })

    test('short mimetype "." test', () => {
        expect(storeObject.fileData).not.toBe(undefined)
        if (storeObject.fileData) {
            storeObject.fileData.mimetype = "dox.pdf.3d"
            expect(storeObject.shortMimetype).toBe("3d")
        }
    })

    test('beautifulUploadedDate test default', () => {
        expect(storeObject.beautifulUploadedDate).toBe("2022-03-16")
    })

    test('is user can delete file', () => {
        expect(storeObject.isUserCanDeleteFile).toBe(false)
    })

    test('user have permission for delete file', () => {
        const falseUserData: any = {
            userData: {
                id: "1"
            }
        }
        storeObject.userStore = falseUserData
        expect(storeObject.isUserCanDeleteFile).toBe(true)
    })

    test('is delete dialog closed by default', () => {
        expect(storeObject.isShowDeleteDialog).toBe(false)
    })

    test('is delete dialog isOpen after his opening', () => {
        storeObject.openDeleteDialog()
        expect(storeObject.isShowDeleteDialog).toBe(true)
    })

    test("delete dialog closed after closing", () => {
        storeObject.openDeleteDialog()
        storeObject.closeDeleteDialog()
        expect(storeObject.isShowDeleteDialog).toBe(false)
    })

})
