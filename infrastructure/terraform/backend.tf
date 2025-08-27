terraform {
  backend "s3" {
    bucket = "XXXXXXXXXXXX-bucket-state-file-karpenter"
    region = "us-east-1"
    key    = "karpenter.tfstate"
  }
}
