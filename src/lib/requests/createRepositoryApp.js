export async function createRepositoryApp() {
  try {
    // Step 1: Create the app
    const createAppBody = {
      name: 'Link Spy Repository',
      description: 'Repository app for tracking link and attachment clicks'
    };

    const createAppResponse = await kintone.api(
      kintone.api.url('/k/v1/preview/app.json', true),
      'POST',
      createAppBody
    );

    const newAppId = createAppResponse.app;

    // Step 2: Add fields
    const addFieldsBody = {
      app: newAppId,
      properties: {
        appID: {
          type: 'SINGLE_LINE_TEXT',
          code: 'appID',
          label: 'App ID',
          noLabel: false,
          required: true,
          unique: true
        },
        appViewers: {
          type: 'USER_SELECT',
          code: 'appViewers',
          label: 'App Viewers',
          noLabel: false,
          required: false
        },
        linkTable: {
          type: 'SUBTABLE',
          code: 'linkTable',
          label: 'Link Statistics',
          fields: {
            linkField: {
              type: 'SINGLE_LINE_TEXT',
              code: 'linkField',
              label: 'Field Code',
              noLabel: false,
              required: true
            },
            clicks: {
              type: 'NUMBER',
              code: 'clicks',
              label: 'Click Count',
              noLabel: false,
              required: false,
              defaultValue: '0'
            },
            users: {
              type: 'USER_SELECT',
              code: 'users',
              label: 'Users Who Clicked',
              noLabel: false,
              required: false
            }
          }
        }
      }
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/form/fields.json', true),
      'POST',
      addFieldsBody
    );

    // Step 3: Set app permissions (before deployment)
    const permissionsBody = {
      app: newAppId,
      rights: [
        {
          entity: {
            type: 'CREATOR'
          },
          appEditable: true,
          recordViewable: true,
          recordAddable: false,
          recordEditable: false,
          recordDeletable: false,
          recordImportable: false,
          recordExportable: false
        },
        {
          entity: {
            type: 'GROUP',
            code: 'everyone'
          },
          appEditable: false,
          recordViewable: false,
          recordAddable: false,
          recordEditable: false,
          recordDeletable: false,
          recordImportable: false,
          recordExportable: false
        }
      ]
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/acl.json', true),
      'PUT',
      permissionsBody
    );

    // Step 4: Deploy the app
    const deployBody = {
      apps: [{ app: newAppId }]
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/deploy.json', true),
      'POST',
      deployBody
    );

    return newAppId;
  } catch (error) {
    console.error('Error creating repository app:', error);
    throw error;
  }
}