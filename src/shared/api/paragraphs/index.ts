export const getParagraphs = async () => {
    const req = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    if (!req.ok) throw req
    return req.json()
}
