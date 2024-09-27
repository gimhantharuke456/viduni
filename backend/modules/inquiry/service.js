const Inquiry = require("./model");

class InquiryService {
  async createInquiry(inquiryData) {
    return await Inquiry.create(inquiryData);
  }

  async getAllInquiries() {
    return await Inquiry.find({}).populate("bookingUserId");
  }

  async getInquiryById(id) {
    return await Inquiry.findById(id).populate("bookingUserId");
  }

  async updateInquiry(id, updateData) {
    return await Inquiry.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate("bookingUserId");
  }

  async deleteInquiry(id) {
    return await Inquiry.findByIdAndDelete(id);
  }
}

module.exports = new InquiryService();
