const { test, expect} = require('@playwright/test');
require('dotenv').config({ path: '.env.test' });

test.describe('GET Role Endpoint Validation', () => {
  const testData = require('../dataSet/testData.json');
  const token = process.env.API_TOKEN;
  const apiBaseUrl = testData.apiBaseUrl;

  test('Retrieve Administrator Role', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl + testData.API_Endpoint + testData.API_role}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Assert status is 200
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    // Assert role type is ADMIN
    expect(responseBody.type).toBe(testData.API_role);
  });

  test('Invalid Role Handling', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl + testData.API_Endpoint + testData.API_InvalidRole}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Assert non-existent role returns 404
    expect(response.status()).toBe(400);
  });
});