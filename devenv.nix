{
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };

  pre-commit.hooks = {
    alejandra.enable = true;
    yamllint = {
      enable = true;
      settings.preset = "relaxed";
    };
    prettier.enable = true;
  };
}
