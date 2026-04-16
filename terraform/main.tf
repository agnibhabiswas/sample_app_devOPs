provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "sample_app" {
  ami           = "ami-0ec10929233384c7f" # Ubuntu ami
  instance_type = "t2.micro"

  key_name = "key_1"

  security_groups = ["launch-wizard-1"]

  user_data = <<-EOF
            #!/bin/bash
            apt update -y
            apt install docker.io -y
            systemctl start docker
            systemctl enable docker
            usermod -aG docker ubuntu
            docker run -d -p 3001:3001 --restart always biswasagnibha97/sample_app:latest
            EOF

  tags = {
    Name = "DevOpsApp"
  }
}