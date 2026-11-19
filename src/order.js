// Money is integer cents.
export const subtotal = (lines) => lines.reduce((sum, l) => sum + l.unitCents * l.qty, 0);
export const itemCount = (lines) => lines.reduce((n, l) => n + l.qty, 0);
