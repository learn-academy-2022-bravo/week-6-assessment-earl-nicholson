# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController is taking inputs from applicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) a method called indexand when called @post is a instance variable, and being set to equal every id in the active record
    @posts = BlogPost.all
  end

  # ---3) a method show and when called @post and when called @post is updated with the params and set a primary id to call on a silgle piece of data
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) a method called new and when called @post is set to a data set that is null and preps to be for a new primary id
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is creating a new primary id with accociated data 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @ post is set to call on one primary id that is a argument and displays that single data set.
    @post = BlogPost.find(params[:id])
  end

  def update 
    @post = BlogPost.find(params[:id])
    # ---7) takes the assigned @post from above and updates it to the new params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) after a data set has been distroyed it will be redirected out of that page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private, anything beyond this point will be inaccessible to a user
  private
  def blog_post_params
    # ---10) the a blog.create have to have the title and content inputs to be created
    params.require(:blog_post).permit(:title, :content)
  end
end
