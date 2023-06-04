type LoginResponse = {
    data: {
        data: {
            id: string,
            display_name: string,
            department: string,
            token: string,
        }
    }
} | null;

export default LoginResponse;