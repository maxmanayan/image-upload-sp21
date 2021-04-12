class CreateMemes < ActiveRecord::Migration[6.1]
  def change
    create_table :memes do |t|
      t.string :text
      t.string :img_url

      t.timestamps
    end
  end
end
