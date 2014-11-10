require 'rails_helper'

describe SessionsController do
  describe "GET #index" do
    it "renders the splash page (index view)" do
      get :index
      expect(response).to render_template (:index)
    end

    pending "has an 'enter' button" do
      get :index
      expect(response.body).to have_link('Enter', href: login_path)
    end
  end
end