const auditService = require("../services/auditService");

const auditWebsite = async (req, res) => {

    try {

        const { url } = req.body;

        const result = await auditService.auditWebsite(url);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

    res.status(error.status || 500).json({
        success: false,
        message: error.message
    });

}

};

module.exports = {
    auditWebsite
};