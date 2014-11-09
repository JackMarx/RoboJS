# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141109184701) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "badges", force: true do |t|
    t.integer  "challenge_id"
    t.string   "image_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "badges", ["challenge_id"], name: "index_badges_on_challenge_id", using: :btree

  create_table "challenges", force: true do |t|
    t.string   "title"
    t.text     "tutorial"
    t.text     "description"
    t.string   "hint"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "games", force: true do |t|
    t.integer  "challenge_id"
    t.integer  "user_id"
    t.string   "status_string", default: ""
    t.boolean  "completed",     default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "instructions"
  end

  add_index "games", ["challenge_id"], name: "index_games_on_challenge_id", using: :btree
  add_index "games", ["user_id"], name: "index_games_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users_badges", force: true do |t|
    t.integer  "user_id"
    t.integer  "badge_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users_badges", ["badge_id"], name: "index_users_badges_on_badge_id", using: :btree
  add_index "users_badges", ["user_id"], name: "index_users_badges_on_user_id", using: :btree

end
