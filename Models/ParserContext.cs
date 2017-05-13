using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LiveGameFeed.Models
{
    public partial class ParserContext : DbContext
    {
        public virtual DbSet<SiteData> SiteData { get; set; }

        public ParserContext(DbContextOptions<ParserContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SiteData>(entity =>
            {
                entity.ToTable("site_data");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Data)
                    .HasColumnName("data")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Xpath)
                    .HasColumnName("xpath")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);
            });
        }
    }
}