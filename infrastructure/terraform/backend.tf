terraform {
  backend "s3" {
    bucket = "XXXXXXXXXXXX-bucket-state-file-karpenter"
    region = "ap-southeast-2"
    key    = "karpenter.tfstate"
  }
}
