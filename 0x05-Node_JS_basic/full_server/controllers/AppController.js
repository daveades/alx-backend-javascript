class AppController {
    static getStatus(req, res) {
        res.status(200).json({ message: "Server is running!" });
    }
}

export default AppController;