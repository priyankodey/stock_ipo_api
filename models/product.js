const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    pid: {
        type: Number,
        required: true
    },
    ipo_name: {
        type: String,
        required: true
    },
    ipo_type: {
        type: String,
        required: true
    },
    ipo_logo: {
        type: String
    },
    ipo_description: {
        type: String
    },
    ipo_open_date: {
        type: Date
    },
    ipo_close_date: {
        type: Date
    },
    ipo_size: {
        type: String
    },
    ipo_fresh_issue: {
        type: String
    },
    ipo_offer_sale: {
        type: String
    },
    ipo_face_value: {
        type: String
    },
    ipo_listing_on: {
        type: String
    },
    ipo_retail_quota: {
        type: Number
    },
    ipo_qib_quota: {
        type: Number
    },
    ipo_nii_quota: {
        type: Number
    },
    ipo_discount: {
        type: String
    },
    drhp_draft_pros: {
        type: String
    },
    rhp_draft_pros: {
        type: String
    },
    anchor_investor: {
        type: String
    },
    ipo_gmp: {
        type: Number
    },
    ipo_min_price: {
        type: Number
    },
    ipo_max_price: {
        type: Number
    },
    retail_min_lot: {
        type: Number
    },
    retail_max_lot: {
        type: Number
    },
    small_hni_min_lot: {
        type: Number
    },
    big_hni_min_lot: {
        type: Number
    },
    retail_min_share: {
        type: Number
    },
    retail_max_share: {
        type: Number
    },
    small_hni_min_share: {
        type: Number
    },
    big_hni_min_share: {
        type: Number
    },
    price_band_date: {
        type: Date
    },
    anchor_inv_date: {
        type: Date
    },
    allotment_date: {
        type: Date
    },
    refunds_date: {
        type: Date
    },
    credit_demat_date: {
        type: Date
    },
    listing_date: {
        type: Date
    },
    report_Y1: {
        type: String
    },
    report_Y1_revenue: {
        type: Number
    },
    report_Y1_expense: {
        type: Number
    },
    report_Y1_PAT: {
        type: Number
    },
    report_Y2: {
        type: String
    },
    report_Y2_revenue: {
        type: Number
    },
    report_Y2_expense: {
        type: Number
    },
    report_Y2_PAT: {
        type: Number
    },
    report_Y3: {
        type: String
    },
    report_Y3_revenue: {
        type: Number
    },
    report_Y3_expense: {
        type: Number
    },
    report_Y3_PAT: {
        type: Number
    },
    know_ipo_review: {
        type: String
    },
    allotment_status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Product", productSchema);