import { ContactsOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { leftShape, rightShape } from "~/assets/images/rsvp";
import sectionTitle from "~/assets/images/section-title.png";
import { useAddWishMutation } from "~/services/wishesSlice";

const normalizeText = (text) => (text ?? "").replace(/\s+/g, " ").trim();

const Rsvp = () => {
  const [addWish, { isLoading }] = useAddWishMutation();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const newWish = {
      ...values,
      name: normalizeText(values.name),
      relationship: normalizeText(values.relationship),
      wishes: normalizeText(values.wishes),
    };

    try {
      await addWish(newWish).unwrap(); // Ensures promise resolves or rejects
      form.resetFields();

      alert("Gửi lời chúc thành công. Cảm ơn bạn!");
    } catch (error) {
      console.error("Failed to add wish:", error);
    }
  };

  return (
    <div className="contact-section py-10 px-4" id="send-wishes">
      <div className="container">
        <div className="relative mx-auto p-2.5 shadow-[0px_2px_16.8px_3.2px_rgba(0,0,0,0.08)] max-w-xl">
          <div className="contact-form-area relative py-5 md:py-15 px-2.5 md:px-10 border-10 md:border-30 border-[#cde0ef]">
            <div className="title-flower mb-10 text-center">
              <span className="text-base md:text-xl text-icon">Let’s Meet</span>
              <h2 className="text-xl sm:text-3xl md:text-4xl my-4 uppercase font-semibold">
                Share Your Love
              </h2>
              <div className="relative mx-auto max-w-48 before:absolute before:w-16 before:md:w-24 before:h-0.5 before:bg-primary before:top-1/2 before:-left-6 before:md:-left-16 after:absolute after:w-16 after:md:w-24 after:h-0.5 after:bg-primary after:top-1/2 after:-right-6 after:md:-right-16">
                <img className="mx-auto" src={sectionTitle} alt="flower" />
              </div>
            </div>

            <div className="form-area">
              <Form form={form} name="name" onFinish={onFinish}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên của bạn!",
                    },
                  ]}
                >
                  <Input
                    maxLength={50}
                    prefix={<UserOutlined className="text-icon!" />}
                    placeholder="Nhập tên: Bạn Trung, Cô 8, Dì 10,..."
                    className="border-icon! py-2!"
                  />
                </Form.Item>

                <Form.Item
                  name="relationship"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mối quan hệ!",
                    },
                  ]}
                >
                  <Input
                    maxLength={50}
                    prefix={<ContactsOutlined className="text-icon!" />}
                    placeholder="Mối quan hệ: Bạn cô dâu, Dì chú rể,..."
                    className="border-icon! py-2!"
                  />
                </Form.Item>

                <Form.Item
                  name="wishes"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập lời chúc!",
                    },
                  ]}
                >
                  <Input.TextArea
                    maxLength={500}
                    placeholder="Viết lời chúc ở đây"
                    className="border-icon! py-2!"
                  />
                </Form.Item>

                <Form.Item className="text-center">
                  <Button
                    htmlType="submit"
                    loading={isLoading}
                    className="bg-[#cde0ef]! w-48 p-6! text-base! border-none! hover:bg-primary! hover:text-white!"
                  >
                    {isLoading ? "Đang gửi..." : "Gửi lời chúc"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

          <div className="vector-1 hidden md:block absolute bottom-0 left-[-68%]">
            <img decoding="async" src={leftShape} alt="leftShape" />
          </div>
          <div className="vector-2 hidden md:block absolute top-0 right-[-38%] -z-10">
            <img decoding="async" src={rightShape} alt="rightShape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
