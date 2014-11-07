class SessionsController < ApplicationController

  def index
    render "sessions/index", layout: false
  end


  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.password == params[:password]
      session[:user_id] = @user.id
      redirect_to "users/#{@user.id}/show"
      # respond_to do |format|
        # format.html { redirect_to :back }
        # format.js #{render :layout => false}
      # end
    else
      @error = "That wasn't quite right"
      # render json: @error, status: 422
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root
  end
end
