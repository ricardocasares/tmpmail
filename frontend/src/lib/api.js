export const message = id => fetch(`/api/storage/${id}`).then(r => r.json());
export const messages = inbox => fetch(`/api/${inbox}`).then(r => r.json());
