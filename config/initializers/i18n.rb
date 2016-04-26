
module I18n
  def self.just_raise(*args)
    Rails.logger.info "Error on translating: #{args.inspect}" unless Rails.env.development?
    if Rails.env.to_s.eql?("development")
      return "X_#{args[2]}_X" #Translation missing
    else
      args[2]
    end
  end
end
I18n.exception_handler = :just_raise
