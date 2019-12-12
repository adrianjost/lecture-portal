require "rails_helper"

RSpec.describe "courses/new", type: :view do
  before(:each) do
    @course = FactoryBot.create(:course)
  end

  it "renders new course form" do
    render
    save_and_open_page
    assert_select "form[action=?][method=?]", courses_path, "post" do
      assert_select "input[name=?]", "course[name]"

      assert_select "textarea[name=?]", "course[description]"
    end
  end
end