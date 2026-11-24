window.themeRegister('bulk', (el) => {
  const T = window.theme;
  const btn = el.querySelector('[data-bulk-add]');
  const err = el.querySelector('[data-bulk-error]');
  btn.addEventListener('click', async () => {
    const items = [...el.querySelectorAll('[data-bulk-qty]')]
      .map((i) => ({ id: Number(i.dataset.variant), quantity: Number(i.value) }))
      .filter((i) => i.quantity > 0);
    if (!items.length) return;
    err.hidden = true;
    btn.disabled = true;
    try {
      const res = await fetch(T.routes.cartAdd + '.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.description || data.message || T.strings.error);
      await Promise.all([window.themeCart.refresh(), window.themeCart.count()]);
      window.themeToast(T.strings.added);
      el.querySelectorAll('[data-bulk-qty]').forEach((i) => (i.value = 0));
      if (!window.themeCart.open(btn)) location.href = T.routes.cart;
    } catch (ex) {
      err.textContent = ex.message;
      err.hidden = false;
    } finally {
      btn.disabled = false;
    }
  });
});
