import bcrypt from 'bcrypt';


class CryptoProvider {

    static async encrypt(data: string, saltRounds: number = 10): Promise<string> {
        const hashedData = await bcrypt.hash(data, saltRounds);
        return hashedData;
    }

    static async compare(plainText: string, hashedText: string): Promise<boolean> {
        return await bcrypt.compare(plainText, hashedText);
    }


}

export default CryptoProvider;