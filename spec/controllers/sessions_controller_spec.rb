require 'rails_helper'

describe SessionsController do
  describe "GET #index" do
    it "renders the splash page (index view)" do
      get :index
      expect(response).to render_template (:index)
    end

    it "has an 'enter' button" do
      get :index
      response.should have_link('Enter', href: login_path)
    end
  end
end